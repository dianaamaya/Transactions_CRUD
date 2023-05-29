package com.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.server.models.Transaction;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    
}
