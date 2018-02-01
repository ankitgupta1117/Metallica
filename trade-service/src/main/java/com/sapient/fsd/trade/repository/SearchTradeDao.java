package com.sapient.fsd.trade.repository;

import com.sapient.fsd.trade.entities.Trade;
import com.sapient.fsd.trade.utils.DateTimeUtils;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by agu187 on 1/15/2018.
 */
@Repository
public class SearchTradeDao {

    @Autowired
    EntityManager em;

    public List<Trade> searchTradeFromDb(String side, String commodity, String counterParty, String location, String startDate, String endDate) {
        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<Trade> query = criteriaBuilder.createQuery(Trade.class);

        Root<Trade> root = query.from(Trade.class);

        List<Predicate> predicateList = new ArrayList<>();
        if (StringUtils.isNotBlank(side)) {
            predicateList.add(criteriaBuilder.equal(root.get("side"), side));
        }
        if (StringUtils.isNotBlank(commodity)) {
            predicateList.add(criteriaBuilder.equal(root.get("commodityCd"), commodity));
        }
        if (StringUtils.isNotBlank(location)) {
            predicateList.add(criteriaBuilder.equal(root.get("locationCd"), location));
        }
        if (StringUtils.isNotBlank(counterParty)) {
            predicateList.add(criteriaBuilder.equal(root.get("cntrPartyCd"), counterParty));
        }
        if(StringUtils.isNotBlank(startDate)){
            predicateList.add(criteriaBuilder.greaterThanOrEqualTo(root.get("tradeDate"), DateTimeUtils.parseDate(startDate)));
        }
        if(StringUtils.isNotBlank(endDate)){
            predicateList.add(criteriaBuilder.lessThanOrEqualTo(root.get("tradeDate"), DateTimeUtils.parseDate(endDate)));
        }

        Predicate[] predicateArr = new Predicate[predicateList.size()];

        query.where(predicateList.toArray(predicateArr));
        return em.createQuery(query).getResultList();
    }


}