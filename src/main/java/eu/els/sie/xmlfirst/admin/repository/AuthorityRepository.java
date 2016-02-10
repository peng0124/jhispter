package eu.els.sie.xmlfirst.admin.repository;

import eu.els.sie.xmlfirst.admin.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
