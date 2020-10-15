package com.camacode.hibernat.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.camacode.hibernat.demo.entity.Student;

public class DeleteStudentDemo {

	public static void main(String[] args) {
		
		//create a session factory
		SessionFactory factory = new Configuration()
										.configure("hibernate.cfg.xml")
										.addAnnotatedClass(Student.class)
										.buildSessionFactory();
		
		//create a session 
		Session session = factory.getCurrentSession();
		
		try {
			
			int studentId = 7; 
			
			session.beginTransaction();
			
			//retrieve student from data base  
			System.out.println("\nGetting a student object .... ");
			Student myStudent = session.get(Student.class,studentId);
			
			//First method
			//Delete the Student 
			//System.out.println("\nDeleting Student .. "+myStudent);
			//session.delete(myStudent);
			
			//second method
			//Deleting student id = 3 
			session.createQuery("delete from Student where id = 7").executeUpdate(); 
			System.out.println("Deleting student id = 7 ");
			
			//commit transaction
			session.getTransaction().commit();
			System.out.println("Done !");

		} 
		finally {
			factory.close();
		}
	}

}
