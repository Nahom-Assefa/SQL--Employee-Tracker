INSERT INTO departments (department_name)
    VALUES('Finance'),
          ('Marketing'),
          ('Operations'),
          ('Sales'),
          ('Accounting'),
          ('Management');

INSERT INTO roles (job_title, department_id, salary)
    VALUES('Financial Analyst', 1, 650000),
          ('Marketing Director', 2, 35000),
          ('Wealth Manager', 1, 90000),
          ('Marketing Strategist', 2, 40000),
          ('Operations Consultant', 3, 80000),
          ('Operational Risk', 3, 70000),
          ('Sales Specialist', 4, 60000),
          ('Sales Representative', 4, 65000),
          ('Accountant', 5, 68000),
          ('Manager', 6, 120000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('James', 'Fraser', 10, NULL),
  ('Jack', 'London', 10, NULL),
  ('Robert', 'Bruce', 2, NULL),
  ('Peter', 'Greenaway', 3, NULL),
  ('Derek', 'Jarman', 4, 1),
  ('Paolo', 'Pasolini', 5, 2),
  ('Heathcote', 'Williams', 6, 2),
  ('Sandy', 'Powell', 7, 1),
  ('Emil', 'Zola', 8, 1),
  ('Sissy', 'Coalpits', 9, 2),
  ('Antoinette', 'Capet', 9, 1),
  ('Samuel', 'Delany', 1, 2),
  ('Tony', 'Duvert', 2, NULL),
  ('Dennis', 'Cooper', 3, NULL),
  ('Monica', 'Bellucci', 6, 2),
  ('Samuel', 'Johnson', 7, 2),
  ('John', 'Dryden', 7, 1),
  ('Alexander', 'Pope', 9, 1),
  ('Lionel', 'Johnson', 7, 2),
  ('Aubrey', 'Beardsley', 8, 1),
  ('Tulse', 'Luper', 5, 2);