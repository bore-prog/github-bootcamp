--- { "layout" : "center" }
<!-- slides.md -->
# Prez-Aurore-GitHub

---

- Made with Spectacle

---

# GitHub Bootcamp

---

## This is my slide

---

## Happy Hacking

---

# How to initialise a new repowsitory

```scss
mkdir nom-de-projet
cd nom-de-projet
git init

// code
```

With `oh-my-zsh` you can use :

```scss
mkcd nom-de-projet
git init

// code
```

---

# How to review changes

```
git diff
```

- or `gd` with zsh

- or open the [**Pull requests**](https://github.com/flexbox/github-bootcamp/pulls) tab in GitHub

---

# How to commit changes

```scss
git status -s
git add .
git commit -m 'le message de commit'
```

With `oh-my-zsh` :

```scss
gss
gaa
gcmsg 'le message de commit'
```

---

# Create a new branch

```
git branch nom_de_branch
git checkout nom_de_branch
```

ou `git checkout -b nom_de_branch`

<br>

ou `git switch -c nom_de_branch`

Vous pouvez ajouter à la fin `origin/main` pour bien baser votre création de branche sur la branch main distante.

---

# Work on a branch

```scss
git checkout nom_de_branche
git add .
git commit -m ":sparkles: message"
```

Pour les messages de commit vous pouvez utiliser des emojis comme ceux de [gitmoji](https://gitmoji.dev/).
Ou encore suivre une [convention de nommage](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

---

# Merge branch on `main`

```
git checkout main
git diff main..nom_de_branche
git merge nom_de_branche
```

## Vous pouvez aussi décider de `git push`sur la branch distante et merger via les pull requests.

# Delete a branch

`git branch --delete nom_de_branche` vous permet de supprimer la branche
D'ailleurs, il vaut mieux avoir changer de branche avant (`git switch main`)
