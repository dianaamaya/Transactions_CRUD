package com.server.services;

import java.util.ArrayList;
import java.util.Optional;

import com.server.models.Transaction;


public interface TransactionService {

    ArrayList<Transaction> getAllTransactions();
    Optional<Transaction> getTransactionById(long id);
    Transaction saveTransaction(Transaction transaction);
    boolean deleteTransactionById(long id);
    
}