package com.jpatest.repository;

import com.jpatest.entity.UserDetails;
import org.springframework.data.repository.CrudRepository;

public interface UserDetailsRepository extends CrudRepository<UserDetails, Integer> {
}
