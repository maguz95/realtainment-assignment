# realtainment-assignment

## Introduction
The project aim is to fetch and show the list of github repositories that match the user search query.

## Requirements
To install the dependencies and run this project I suggest to use `node >=16.0.0`.
## Project setup and local run
Clone the project

```bash
  git clone https://github.com/maguz95/realtainment-assignment.git
```

Go to the project directory

```bash
  cd realtainment-assignment
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn serve
```

## Project structure
The structure of the project is the following:

src\
  ├ components/\
  ├─ atoms/\
  ├── RepositoryListItem.vue\
  ├── SearchInput.vue\
  ├─ molecules/\
  ├── Modal.vue\
  ├── Pagination.vue\
  ├── RepositoryList.vue\
  └App.vue

## Anything worth mentioning
I tried to keep the project as simple as possible. But since I've never used a caching system before, I tried to implement it using `axios-extensions`.
