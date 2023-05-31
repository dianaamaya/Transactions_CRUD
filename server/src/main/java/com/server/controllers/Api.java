package com.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.models.Transaction;
import com.server.services.TransactionService;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api")
public class Api {

    @Autowired
    TransactionService transactionService;

    @GetMapping("/all")
    public ArrayList<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping("/find/{id}")
    public Optional<Transaction> getTransactionById(@PathVariable("id") long id) {
        return transactionService.getTransactionById(id);
    }

    @PostMapping("/save")
    public Transaction saveTransaction(@RequestBody Transaction transaction) {
        return transactionService.saveTransaction(transaction);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTransactionById(@PathVariable("id") long id) {
        if (transactionService.deleteTransactionById(id)) {
            return "ok";
        } else {
            return "something went wrong";
        }       
    }
    
}