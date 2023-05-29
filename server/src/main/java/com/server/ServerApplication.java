package com.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ServerApplication {

	static void Sum (int a, int b) {
		System.out.println("this is the result "+ a+b);
	}

	public static void main(String[] args) {
		Sum(2,6);
		SpringApplication.run(ServerApplication.class, args);
	}

}
