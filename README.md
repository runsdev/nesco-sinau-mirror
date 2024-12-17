# Repositori Latihan (aiti nesco) ات نيسغوا

## Design

https://www.figma.com/design/1t1te9RJJTeqgigBuFvXeG/Porsenigama-2024-(Copy)?node-id=403-2&t=ITWjlUa67fgnhLIa-1

## Pull & Push Schema

1. Checkout to develop branch
2. Pull origin develop (awas sampe ga dilakuin)
3. Create a new branch (Please read the rule below this section)
4. Checkout to the new branch
5. Code
6. Commit (Please follow the commit messages rule)
7. Pull origin develop
8. Push origin "your branch name"
9. Create a new pull request to develop branch and mention me (arya) :v
10. Done

## Branch Naming

`<type>/<short_description>.<nama_kamu>`

- `<type>` :
  - feature: saya menambahkan fitur baru
  - fixing: saya memperbaiki fitur

Contoh: feature/navbar.arya

## Commit message

`<type>[scope]: <short_summary>`

- `<type>` :
  - feat: saya menambahkan fitur baru
  - fix: saya memperbaiki fitur

Contoh: feat[Homepage]: Creating about section

## Folder Structure

```
- public: file public (including assets)
- app : Contain all pages
- src
    - components : all components (layouts, button, navbar, etc)
    - helpers : pembantu (fetch backend, etc)
    - hooks : custom hooks
    - context: custom context
    - modules: all views
        - [Page name]
            - page.js
```

## Notes

- kalo branch mu udah di merge, jangan lupa juga buat hapus branch mu dari github (biar rapi :>)
