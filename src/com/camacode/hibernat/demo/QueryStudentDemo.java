package com.camacode.hibernat.demo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.camacode.hibernat.demo.entity.Student;

public class QueryStudentDemo {

	public static void main(String[] args) {
		
		//create a session factory
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(Student.class)
										.buildSessionFactory();
		
		//create a session 
		Session session = factory.getCurrentSession();
		
		try {
			//start a transaction 
			System.out.println("Begin transaction .... ");
			session.beginTransaction();
			
			//query students
			List<Student> students = session.createQuery("from Student")
									.getResultList();
			
			//query students : lastName = "younes"
			List<Student> mstudents = session.createQuery("from Student s where s.lastName='younes'")
					.getResultList();
			
			//display the students
			displayStudents(mstudents);
			
			//commit transaction
			session.getTransaction().commit();
			System.out.println("Done !");


		} 
		finally {
			factory.close();
		}
		

	}

	/**
	 * @param mstudents
	 */
	private static void displayStudents(List<Student> mstudents) {
		for (Student student : mstudents) {
			System.out.println(student);
		}
	}

}
