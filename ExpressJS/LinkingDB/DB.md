# Linking DataBase ( MySQL )

---

## DataBase & RDB & RDBMS

데이터베이스 

+ 조회된 정보 또는 데이터의 조직화된 모음으로서 일반적으로 컴퓨터 시스템에 전자적으로 저장

+ 일반적으로 데이터베이스 관리 시스템 DBMS에 의하여 제어됨

RDB ; Relational DataBase 관계형 데이터베이스

+ 데이터베이스에 관계를 추가해 정리한 데이터베이스

RDBMS ; Relational DataBase Management System 관계형 데이터베이스 관리 시스템

+ 관계형 데이터베이스를 관리하는 시스템

+ 대표적으로 MySQL

---

## ORM

Object Relational Mapping 객체 - 관계 - 매핑

프로그래밍 언어의 객체와 RDB의 관계를 매핑해주는 도구

+ 즉, 각각의 프로그래밍 언어와 DB를 연결한다고 봐도 된다

### 각 언어별 대표적인 프레임워크와 ORM

| 프로그래밍 언어 | 프레임워크 | ORM |
|-------------|---------|-----|
| JavaScript  | ExpressJS | Sequelize |
| TypeScript  | NestJS | TypeORM |
| Java | SpringBoot | JPA |
| python | Flask | SQLAlchemy |

---

## Sequelize

JavaScript의 대표적인 ORM

```
Sequelize는 Oracle, Postgres, MySQL, MariaDB, SQLite 및 SQL Server 등을 위한 최신 TypeScript 및 Node.js ORM입니다. 견고한 트랜잭션 지원, 관계, 열망 및 지연 로딩, 읽기 복제 등을 제공합니다.
- 공식 사이트 상의 소개 ( 번역 )
```

자세한 것은 DB 공부할 때 배운다

---

## 회원가입 시스템으로 알아보는 ORM 사용법

여기서 중요한 것은 `models` 폴더의 내용물과 `controller` 폴더의 내용들이다.

못보던 함수들에 대해서 자세히 알아보고 정리하면 이해가 될 것이다.