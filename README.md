# Bienvenue chez O'mazon

## Pré-requis

<details><summary>
Pré-requis
</summary>

- Vérifier la version de Node

  - Version supérieure à 20 à vérifier avec `node -v`
  - [Sinon à installer avec NVM](https://gist.github.com/enzoclock/4699778e26a7a0990ef00e42c8a3f87b)

- Installer [`pnpm`](https://pnpm.io/)

  - par exemple via un `npm install -g pnpm`
  - et vérifier sa bonne installation avec `pnpm --version`

- Installer l'extension VSCode [`SQLite Viewer`](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

  - car le SGBD par défaut du projet est [SQLite](https://www.sqlite.org/)
  - cette extension permet d'observer plus facilement le contenu de la base de données

- Installer l'extension VSCode [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
  - pour améliorer l'auto-complétion des variables SCSS

- Installer l'extension VSCode [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
  - pour améliorer le confort de développement

</details>


## Installation

<details><summary>
Installation
</summary>


```bash
# Installer les dépendances frontend (React) et backend (API)
pnpm install
```

### Mise en place de la base de données

#### Option 1 : Postgres

```bash
# Se connecter à Postgres via psql en tant que super admin
sudo -i -u postgres psql # ou équivalent
```

```sql
-- Créer l'utilisateur
CREATE ROLE omazon WITH LOGIN PASSWORD 'omazon';

-- Créer la base de données
CREATE DATABASE omazon WITH OWNER omazon;
```

```bash
# Créer un fichier d'environnement
touch packages/backend/.env

# L'ouvrir et y ajouter les variables suivantes :
DATABASE_DIALECT=postgres
DATABASE_NAME=omazon
DATABASE_USER=omazon
DATABASE_PASSWORD=omazon
```

```bash
# Lancer les migrations et l'échantillonnage
pnpm db:reset
```

#### Option 2 : SQLite

Note : quelques problèmes de compatibilité entre `Node.js` (v22) et `SQLite3` (v7) à l'heure actuelle (07/03/2025), donc mise en place non recommandée pour le moment.

Option par défaut, pas d'environnement à configurer :

```bash
# Créer la base de données SQLite
pnpm db:reset

# À noter : par défaut, la BDD se trouve alors dans le fichier (non versionné) :
# /packages/backend/database.sqlite
```

### Lancement

Dans **deux terminaux distincts** :

```bash
# Lancer le serveur Express pour l'API
# Port par défaut : 3000
pnpm dev:back
```

```bash
# Lancer le serveur Vite pour React
# Port par défaut : 5173
pnpm dev:front
```

</details>

## Documentation

<details><summary>
Documentation
</summary>

Il s'agit d'un mono-dépôt, géré par `pnpm`, une surcouche à NPM.

- le code `React` se trouve dans `packages/frontend`
- le code `Express` se trouve dans `packages/backend`

Si besoin d'installer un package, voici la commande à fournir :

- côté `frontend` :
  - `pnpm --filter frontend add <nom_du_package>`
- côté `backend` :
  - `pnpm --filter backend add <nom_du_package>`

</details>

## Exercices

### Exercice 1

<details><summary>
Prise en main du code
</summary>

Lancer le projet en suivant les étapes d'**installation** plus haut.

Lire la brève **documentation** de ce document plus haut.

Faire un tour de l'architecture `React` fournie, sans entrer dans les détails.

En cas de question, n'hésitez pas à les poser en créant des issues GitHub !

</details>

### Exercice 2.1

<details><summary>
Extraction du composant `CategoryCard`
</summary>

Depuis le composant `HomePage`, extraire un composant `CategoryCard` :

```js
<CategoryCard category={category} />
```

Notes :

- utiliser le composant extrait à l'endroit d'où il a été extrait.
- typer correctement les props de ce composant en utilisant l'interface `ICategory` déjà définie dans `src/@types`.
- ne pas oublier d'extraire également le CSS associé dans un fichier dédié à importer depuis le composant.
- penser **tester** et à **committer** en fin d'étape.

</details>

### Exercice 2.2

<details><summary>
Extraction du composant `ProductCard`
</summary>

Depuis le composant `HomePage`, extraire un composant `ProductCard` :

```js
<ProductCard product={product} />
```

Notes :

- même démarche que le composant `CategoryCard`.
- lors de l'extraction du CSS, penser à bien importer la variable `_v` contenant les variables SCSS.
- penser **tester** et à **committer** en fin d'étape.

</details>

### Exercice 3.1

<details><summary>
Barre de recherche des produits
</summary>

Faire fonctionner le composant `SearchBar` afin qu'il affiche uniquement les produits dont le titre correspond à la recherche de l'utilisateur.
N'afficher les résultats que si un mot est renseigné.

<details><summary>
Aide
</summary>
- Créer une variable d'état pour stocker le mot recherché.
- Contrôler l'input avec cet état pour qu'à chaque caractère renseigné, la variable d'état reflète le texte renseigné.
- Récupérer les `products` dans le composant via un `import` (dans un premier temps, ou bien les fournir depuis le composant parent).
- Créer une variable pour contenir les produits filtrés, c'est-à-dire ceux dont le titre correspond au mot recherché.
- Dans le rendu, boucler sur ces produits à l'aide d'un `.map` pour les afficher.
- S'il n'y a aucun mot recherché, masquer l'affichage des résultats.

</details>

</details>

### Exercice 3.2

<details><summary>
(Bonus) Barre de recherche des produits, filtrés également par catégorie
</summary>

Les résultats de la recherche doivent à présent cumuler un :

- filtrage sur le **texte** indiqué par l'utilisateur (partie précédente)
- mais également par la **catégorie** choisie par l'utilisateur à l'aide du menu déroulant accolé à la barre de recherche.

Par exemple, en recherchant le mot `cha` :

- sans filtrage par catégorie, on obtient plus de 5 résultats
- en filtrant également par la catégorie `Animalerie`, on obtient uniquement un résultat (un bac à litière pour `cha`t autonettoyant)
- en filtrant également par la catégorie `Chaussures`, on obtient les résultats correspondant aux différentes `cha`ussures

</details>

### Exercice 4.1

<details><summary>
Récupérer les catégories depuis l'API
</summary>

Les données des `categories` sont pour le moment fournies en brut dans le code front. Allons à présent les récupérer depuis l'API !

- Commençons par installer une librairie qui simplifie les appels HTTP : [`axios`](https://axios-http.com/docs/intro)

```bash
# Pour l'installer côté frontend
pnpm --filter frontend add axios
```

- Ajouter un `useEffect` qui se déclenche uniquement au chargement du composant, et qui fait l'appel vers la route `GET /api/categories` de l'API pour récupérer les catégories.

<details><summary>
Aide pour l'utilisation d'Axios
</summary>

Voici la signature de la fonction `get` :

```ts
axios.get<T>: (url: string): Promise<{ status: string, data: T }>
```

Ce qui dans le code signifie l'utilisation suivante :

```ts
import axios from "axios";

// Théoriquement
const { status, data } = await axios.get<MonType>("mon-url");

// Par exemple
const { data } = await axios.get<ICategory[]>(
  "http://localhost:3000/api/categories",
);
console.log(data);
```

</details>

- Stocker les résultats de l'API dans une variable d'état bien nommée.
  - en attendant que les données soient chargées, on peut par exemple initialiser la valeur de cette variable à un tableau vide avec son typage, par exemple :

```ts
const [categories, setCategories] = useState<ICategory[]>([]);
```

- Fournir les données récupérées par l'API aux différents composants qui l'utilisent. Il faudra donc ajouter des props et les typer :

  - `Header`
  - `HomePage`

- Penser à **tester**, puis **committer** une fois l'étape terminée.

</details>

### Exercice 4.2

<details><summary>
Récupérer les produits depuis l'API
</summary>

Même chose que la partie précédente, pour cette fois récupérer et afficher les produits depuis la route `GET /api/products`.

Notes :

- on déclenche l'appel API dans le même `useEffect` que précédemment.
- il faudra également fournir les données au composant `SearchBar` puisqu'il présente également les données.

</details>

### Exercice 5

<details><summary>
Mise en place d'un router
</summary>

Installer [React Router](https://reactrouter.com/start/library/installation)

```bash
pnpm --filter frontend add react-router
```

Dans le fichier `main.tsx`, ajouter un composant `BrowserRouter` autour du composant `App`

```jsx
import { BrowserRouter } from "react-router-dom";

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

Dans le composant `App`, ajouter un composant `Routes` autour du composant `HomePage`. De cette façon, le `Header` et `Footer` resteront visibles sur toutes les pages, seul le contenu principal changera en fonction de la navigation :

```tsx
<main className="main">
  <Routes>
    <HomePage categories={categories} products={products} />
  </Routes>
</main>
```

Enfin, on fait le rendu du composant `HomePage` uniquement sur la route `/` grâce à l'ajout d'un composant `Route` :

```tsx
<main className="main">
  <Routes>
    <Route
      path="/"
      element={<HomePage categories={categories} products={products} />}
    />
  </Routes>
</main>
```

Tester et committer. Bravo, le routeur est en place !

</details>

### Exercice 6

<details><summary>
Page de toutes les catégories
</summary>

À l'aide du routeur en place, il est temps de créer une nouvelle page pour afficher toutes les catégories :

- ajouter un composant `CategoriesPage` pour l'affichage de cette page. On commence par tester en affichant simplement un `<h1>` dans un premier temps.
- ajouter une `Route` avec le chemin `/categories` qui affiche la nouvelle page.
- faire fonctionner le lien `Toutes les catégories` du `Header` à l'aide d'un composant [`Link` de la librairie React Router](https://reactrouter.com/start/library/navigating).
- puis améliorer l'affichage de la page des catégories, par exemple en réutilisant le composant `CategoryCard` et en affichant toutes les catégories existantes

</details>

### Exercice 7

<details><summary>
Page d'un produit
</summary>

On souhaite pouvoir visualiser un produit :

- l'utilisateur clique sur un produit depuis la page d'accueil
- il est redirigé vers la page `/article/<slug-du-produit>`
- cette page lui affiche les détails du produit

</details>

### Exercice 8

<details><summary>
Page d'une catégorie
</summary>

On souhaite pouvoir visualiser tous les produits d'une catégorie spécifique :

- l'utilisateur clique sur une catégorie, depuis la page d'accueil ou la page listant toutes les catégories
- il est redirigé vers la page `/category/<slug-de-la-categorie>`
- cette page lui affiche tous les produits. S'il n'y a aucun article dans cette catégorie, on lui affiche un message adapté à la place.

</details>

### Exercice 9

<details><summary>
Page non trouvée
</summary>

Lorsque l'utilisateur navigue vers une page non existante, ou une catégorie qui n'existe pas, on souhaite lui afficher une page d'erreur.

On peut d'ailleurs s'inspirer de la [vraie page d'Amazon](https://www.amazon.fr/not-found) en affichant l'image d'un chien aléatoire dont l'URL serait récupérée [via une API](https://dog.ceo/dog-api/). Alternativement, pour la [team chat](https://cataas.com/), il existe d'autres API.

</details>

### Exercice 10

<details><summary>
Et un peu de vrac ?
</summary>

A présent, il est temps de se la jouer full-stack !

Voila quelques fonctionnalités en vrac à implémenter. N'hésites pas à réfléchir à **la démarche d'implementation** avant de te lancer dans le code. Tu peux également l'envoyer à ton formateur pour vérifier les points qui pourrait s'avérer bloquant.

Tu seras amené à fouiller le code backend pour trouver les endpoints utiles, à comprendre leur fonctionnement, voire à en ajouter de nouveaux si besoin.

- Page de création d'un compte utilisateur
- Page de connexion d'un utilisateur
- Affichage du prénom de l'utilisateur dans le header lorsque celui est connecté
- Création d'une page de profil pour l'utilisateur connecté
- Gestion du panier des produits sélectionnés par l'utilisateur. Plusieurs pages et routes backend sont à prévoir, ainsi qu'un nouveau modèle pour la base de données !

</details>
