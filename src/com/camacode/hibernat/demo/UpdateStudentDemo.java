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
			
			int studentId = 1; 
			//Update a student object
			
			session.beginTransaction();
			
			//save the student object  
			System.out.println("\nGetting a student object .... ");
			Student myStudent = session.get(Student.class,studentId);
			
			System.out.println(myStudent);
			System.out.println("\nUpdating Student .. ");
			myStudent.setFirstName("H");
			
			myStudent = session.get(Student.class,studentId);
			System.out.println(myStudent);
			//commit transaction
			session.getTransaction().commit();
			//new code
			Session s = factory.getCurrentSession();
			s.beginTransaction();
			//update email for all student 
			s.createQuery("update Student set email='foo@gmail.com'")
				.executeUpdate();
			
			//commit the transaction
			s.getTransaction().commit();
			 
			System.out.println("Done !");

		} 
		finally {
			factory.close();
		}
	}

}
