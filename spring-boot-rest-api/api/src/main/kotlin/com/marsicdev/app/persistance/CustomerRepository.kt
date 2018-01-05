package com.marsicdev.app.persistance

import com.marsicdev.app.model.Customer
import org.springframework.data.repository.CrudRepository

interface CustomerRepository: CrudRepository<Customer, Long>