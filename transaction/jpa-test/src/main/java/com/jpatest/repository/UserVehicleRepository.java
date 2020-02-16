package com.jpatest.repository;

import com.jpatest.entity.UserVehicle;
import org.springframework.data.repository.CrudRepository;

public interface UserVehicleRepository extends CrudRepository<UserVehicle, Integer> {
}
