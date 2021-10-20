package com.camacode.jdbc_and_jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class JdbcAndJpaApplication implements CommandLineRunner {
	@Autowired
	PersonJdbcDao personJdbcDao;
	Logger logger = LoggerFactory.getLogger(this.getClass());
	public static void main(String[] args) {
		SpringApplication.run(JdbcAndJpaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("All Users ->{}",personJdbcDao.findAll());
		logger.info("----------------------------------------------");
		Person person = new Person(1006,"sofiane","lacadat",new Date());
		logger.info("insert person id = -> {}",personJdbcDao.insert(person));
		logger.info("User id 1001 ->{}",personJdbcDao.findById(1001));
		logger.info("User deleted : ->{}",personJdbcDao.deleteById(1002));
		person.setName("sofiane 2");
		logger.info("Update person : ->{}",personJdbcDao.update(person));
		logger.info("All users = -> {}",personJdbcDao.findAll());
	}
}
