package com.camacode.hibernat.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.camacode.hibernat.demo.entity.Student;

public class UpdateStudentDemo {

	public static void main(String[] args) {
		
		//create a session factory
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(Student.class)
										.buildSessionFactory();
		
		//create a session 
		Session session = factory.getCurrentSession();
		
		try {

			//Update a student object
			System.out.println("Begin transaction .... ");
			session.beginTransaction();
			
			//save the student object  
			System.out.println("Save a student object .... ");

			
			//commit transaction
			session.getTransaction().commit();
			System.out.println("Done !");


		} 
		finally {
			factory.close();
		}
		

	}

}
