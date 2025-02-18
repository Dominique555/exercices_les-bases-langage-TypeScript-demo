# Kadea TypeScript - Exercices et Tests

## 📌 Introduction

Bienvenue dans le projet **Exercices TypeScript** ! 🎯 Ce projet est conçu pour vous aider à pratiquer TypeScript à travers une série d'exercices.

Chaque exercice a un objectif précis et vous permet d'approfondir vos connaissances sur TypeScript, notamment sur :

- Les **fonctions et types**
- Les **interfaces et types avancés**

**⚠️ Règles importantes :**

- **Ne modifiez pas les exports** des fichiers d'exercices, sinon les tests ne fonctionneront pas !
- Lisez bien chaque énoncé avant de coder.

---

## 🚀 Installation et Configuration

### 📂 Prérequis

Avant de commencer, assurez-vous d'avoir **Node.js** installé sur votre machine. Vérifiez avec :

```sh
node -v
```

### 📥 Cloner le projet

```sh
git clone git@github.com:kadea-academy-learners/exercices_les-bases-langage-TypeScript-demo.git
cd kadea-typescript
```

### 📦 Installer les dépendances

```sh
npm install
```

### 🏗️ Compiler le projet

```sh
npm run build
```

### ✅ Lancer les tests

```sh
npm test
```

---

## 📝 Liste des Exercices

### **1️⃣ add (Addition de deux nombres)**

#### 🎯 Objectif

Écrire une fonction `add` qui prend **deux nombres** et retourne leur somme.

#### 📌 Exemple

```ts
add(2, 3); // ➝ 5
add(-1, 5); // ➝ 4
```

---

### **2️⃣ afficherUtilisateur (Afficher un utilisateur premium)**

#### 🎯 Objectif

Créer une fonction `afficherUtilisateur` qui prend un **utilisateur premium** et affiche son abonnement.

#### 📌 Exemple

```ts
const user = { id: 1, nom: "Alice", abonnement: "gold" };
afficherUtilisateur(user); // ➝ "Alice possède un abonnement gold"
```

---

### **3️⃣ containsWord (Vérifier si un mot est contenu dans une phrase)**

#### 🎯 Objectif

Créer une fonction `containsWord` qui vérifie si une phrase contient un certain mot.

#### 📌 Exemple

```ts
containsWord("Hello world", "world"); // ➝ true
containsWord("Bonjour tout le monde", "nuit"); // ➝ false
```

---

### **4️⃣ envoyerNotification (Envoyer une notification)**

#### 🎯 Objectif

Créer une fonction `envoyerNotification` qui envoie une notification de type `email`, `sms` ou `push`.

#### 📌 Exemple

```ts
envoyerNotification({
	type: "email",
	destinataire: "alice@example.com",
	message: "Hello !",
});
// ➝ "Notification envoyée via email à alice@example.com : \"Hello !\""
```

---

### **5️⃣ getDifficulte (Retourner un niveau de difficulté)**

#### 🎯 Objectif

Créer une fonction `getDifficulte` qui prend un `enum` représentant la difficulté (`Facile`, `Moyen`, `Difficile`).

#### 📌 Exemple

```ts
getDifficulte(Difficulte.Facile); // ➝ "Le niveau sélectionné est : Facile"
```

---

### **6️⃣ isArray (Vérifier si un élément est un tableau)**

#### 🎯 Objectif

Créer une fonction `isArray` qui retourne `true` si l’élément est un tableau, `false` sinon.

#### 📌 Exemple

```ts
isArray([1, 2, 3]); // ➝ true
isArray("Hello"); // ➝ false
```

---

### **7️⃣ isEven (Vérifier si un nombre est pair)**

#### 🎯 Objectif

Créer une fonction `isEven` qui vérifie si un nombre est pair.

#### 📌 Exemple

```ts
isEven(4); // ➝ true
isEven(7); // ➝ false
```

---

### **8️⃣ reverseString (Inverser une chaîne de caractères)**

#### 🎯 Objectif

Créer une fonction `reverseString` qui inverse une chaîne de caractères.

#### 📌 Exemple

```ts
reverseString("hello"); // ➝ "olleh"
reverseString("TypeScript"); // ➝ "tpircSpeyT"
```

---

### **9️⃣ toUpperCaseString (Convertir une chaîne en majuscules)**

#### 🎯 Objectif

Créer une fonction `toUpperCaseString` qui met une chaîne en majuscules.

#### 📌 Exemple

```ts
toUpperCaseString("hello"); // ➝ "HELLO"
```

---

### **🔟 validerPaiement (Valider un mode de paiement)**

#### 🎯 Objectif

Créer une fonction `validerPaiement` qui accepte uniquement `"carte"`, `"paypal"` ou `"virement"`.

#### 📌 Exemple

```ts
validerPaiement("carte"); // ➝ "Paiement accepté via carte"
validerPaiement("bitcoin"); // ➝ Erreur
```

---

## 👨‍🏫 Consignes supplémentaires

✅ Respectez les types demandés dans les exercices.
✅ Ne modifiez pas les exports dans les fichiers.
✅ Lisez bien chaque énoncé avant d’écrire votre code.
✅ Testez vos fonctions avec `npm test` avant de considérer un exercice comme terminé.

Bonne pratique et bon courage ! 🚀
