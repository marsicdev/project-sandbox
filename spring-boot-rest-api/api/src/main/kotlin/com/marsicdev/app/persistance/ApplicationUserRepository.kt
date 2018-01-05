package com.marsicdev.app.persistance

import com.marsicdev.app.model.ApplicationUser
import org.springframework.data.repository.CrudRepository

interface ApplicationUserRepository : CrudRepository<ApplicationUser, Long> {
    fun findByUsername(username: String): ApplicationUser?
}