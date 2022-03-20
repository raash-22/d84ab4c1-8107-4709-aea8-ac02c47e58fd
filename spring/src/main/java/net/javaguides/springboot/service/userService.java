package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.userRepository;

@Service
public class userService {
	@Autowired
	userRepository repo;

	public User saveuser(User userdetail) {
		// TODO Auto-generated method stub
		return repo.save(userdetail);
	}

	public List<User> findAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
}
