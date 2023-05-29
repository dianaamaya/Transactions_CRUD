package com.server.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.models.Transaction;
import com.server.repositories.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public ArrayList<Transaction> getAllTransactions() {
        return (ArrayList<Transaction>) transactionRepository.findAll();
    }

    @Override
    public Optional<Transaction> getTransactionById(long id) {
        return transactionRepository.findById(id);
    }

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public boolean deleteTransactionById(long id) {
        try {
            Optional<Transaction> transaction = getTransactionById(id);
            transactionRepository.delete(transaction.get());
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
}
