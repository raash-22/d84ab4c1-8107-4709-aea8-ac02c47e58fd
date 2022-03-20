package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.userRepository;
import net.javaguides.springboot.service.userService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class userController {
	
	@Autowired
	userService userServices;
	//private userRepository UserRepository;
	
	@GetMapping("product")
	public List<User> getUsers(){
		//return this.UserRepository.findAll();
		return userServices.findAll();
	}
	
	@PostMapping("saveproduct")
	public User postUsers(@RequestBody User userdetail) {
		return userServices.saveuser(userdetail);
	}
}
