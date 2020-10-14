package com.camacode.hibernat.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.camacode.hibernat.demo.entity.Student;

public class ReadStudentDemo {

	public static void main(String[] args) {
		
		//create a session factory
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(Student.class)
										.buildSessionFactory();
		
		//create a session 
		Session session = factory.getCurrentSession();
		
		try {
			int id = 4;
			//get new session and start ! 
			session =factory.getCurrentSession();
			session.beginTransaction();

			Student mStudent = session.get(Student.class,id);
			
			System.out.println("get complete : "+mStudent);
			session.getTransaction().commit();
			System.out.println("Done! ");
			
		} 
		finally {
			factory.close();
		}
		

	}

}
