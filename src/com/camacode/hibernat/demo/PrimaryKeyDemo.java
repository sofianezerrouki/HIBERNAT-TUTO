package com.camacode.hibernat.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.camacode.hibernat.demo.entity.Student;

public class PrimaryKeyDemo {

	public static void main(String[] args) {

		//create a session factory
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(Student.class)
										.buildSessionFactory();
		
		//create a session 
		Session session = factory.getCurrentSession();
		
		try {
			//use the session object to save java object
			System.out.println("Create 4 student object .... ");
			Student student1 = new Student("ilyes", "ilyes", "ilyes@gmail.com");
			Student student2 = new Student("younes", "younes", "younes@gmail.com");
			Student student3 = new Student("smail", "smail", "smail@gmail.com");
			Student student4 = new Student("Abd LLatif", "lotfi", "lotfi@gmail.com");
	
			//create a student object
			System.out.println("Begin transaction .... ");
			session.beginTransaction();
			
			//save the student object  
			System.out.println("Save a student object .... ");
			session.save(student1);
			session.save(student2);
			session.save(student3);
			session.save(student4);
			
			//commit transaction
			session.getTransaction().commit();
			System.out.println("Done !");

		} 
		finally {
			factory.close();
		}

	}

}
