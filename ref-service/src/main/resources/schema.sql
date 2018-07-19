--------------------------------------------------------
--  File created - Thursday-July-19-2018
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table REF_COMMODITIES
--------------------------------------------------------

  CREATE TABLE "REFERENCE"."REF_COMMODITIES"
   (	"ID" NUMBER(38,0),
	"CODE" VARCHAR2(20 BYTE),
	"DESCRIPTION" VARCHAR2(20 BYTE)
   ) ;

Insert into REFERENCE.REF_COMMODITIES (ID,CODE,DESCRIPTION) values (1,'ZN','Zinc');
Insert into REFERENCE.REF_COMMODITIES (ID,CODE,DESCRIPTION) values (2,'AG','Silver');
Insert into REFERENCE.REF_COMMODITIES (ID,CODE,DESCRIPTION) values (3,'AU','Gold');
Insert into REFERENCE.REF_COMMODITIES (ID,CODE,DESCRIPTION) values (4,'CU','Copper');
Insert into REFERENCE.REF_COMMODITIES (ID,CODE,DESCRIPTION) values (5,'AL','Aluminium');
--------------------------------------------------------
--  DDL for Index REF_COMMODITIES_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "REFERENCE"."REF_COMMODITIES_PK" ON "REFERENCE"."REF_COMMODITIES" ("ID") ;
--------------------------------------------------------
--  Constraints for Table REF_COMMODITIES
--------------------------------------------------------

  ALTER TABLE "REFERENCE"."REF_COMMODITIES" ADD CONSTRAINT "REF_COMMODITIES_PK" PRIMARY KEY ("ID");

  ALTER TABLE "REFERENCE"."REF_COMMODITIES" MODIFY ("DESCRIPTION" NOT NULL ENABLE);
  ALTER TABLE "REFERENCE"."REF_COMMODITIES" MODIFY ("CODE" NOT NULL ENABLE);
  ALTER TABLE "REFERENCE"."REF_COMMODITIES" MODIFY ("ID" NOT NULL ENABLE);


commit;

--------------------------------------------------------
--  File created - Thursday-July-19-2018
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table REF_COUNTERPARTY
--------------------------------------------------------

  CREATE TABLE "REFERENCE"."REF_COUNTERPARTY"
   (	"ID" VARCHAR2(20 BYTE),
	"NAME" VARCHAR2(20 BYTE)
   ) ;

Insert into REFERENCE.REF_COUNTERPARTY (ID,NAME) values ('Lorem','Lorem');
Insert into REFERENCE.REF_COUNTERPARTY (ID,NAME) values ('Ipsum','Ipsum');
Insert into REFERENCE.REF_COUNTERPARTY (ID,NAME) values ('Dolor','Dolor');
Insert into REFERENCE.REF_COUNTERPARTY (ID,NAME) values ('Ament','Ament');
--------------------------------------------------------
--  DDL for Index REF_COUNTERPARTY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "REFERENCE"."REF_COUNTERPARTY_PK" ON "REFERENCE"."REF_COUNTERPARTY" ("ID")  ;
--------------------------------------------------------
--  Constraints for Table REF_COUNTERPARTY
--------------------------------------------------------

  ALTER TABLE "REFERENCE"."REF_COUNTERPARTY" ADD CONSTRAINT "REF_COUNTERPARTY_PK" PRIMARY KEY ("ID");
  ALTER TABLE "REFERENCE"."REF_COUNTERPARTY" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "REFERENCE"."REF_COUNTERPARTY" MODIFY ("ID" NOT NULL ENABLE);

commit;

--------------------------------------------------------
--  File created - Thursday-July-19-2018
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table REF_LOCATIONS
--------------------------------------------------------

  CREATE TABLE "REFERENCE"."REF_LOCATIONS"
   (	"CODE" VARCHAR2(20 BYTE),
	"NAME" VARCHAR2(20 BYTE)
   ) ;
REM INSERTING into REFERENCE.REF_LOCATIONS
SET DEFINE OFF;
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('LN','London');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('SG','Singapore');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('NY','New York');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('DN','Denver');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('ND','New Delhi');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('MUM','Mumbai');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('GGN','Gurgaon');
Insert into REFERENCE.REF_LOCATIONS (CODE,NAME) values ('UK','United Kingdom');
--------------------------------------------------------
--  DDL for Index REF_LOCATIONS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "REFERENCE"."REF_LOCATIONS_PK" ON "REFERENCE"."REF_LOCATIONS" ("CODE") ;
--------------------------------------------------------
--  Constraints for Table REF_LOCATIONS
--------------------------------------------------------

  ALTER TABLE "REFERENCE"."REF_LOCATIONS" ADD CONSTRAINT "REF_LOCATIONS_PK" PRIMARY KEY ("CODE");
  ALTER TABLE "REFERENCE"."REF_LOCATIONS" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "REFERENCE"."REF_LOCATIONS" MODIFY ("CODE" NOT NULL ENABLE);

commit;
