# 📚 Refactorisation de la Section Resume/Timeline - Documentation Détaillée

## 🎯 Objectif
Restructurer la section Education/Experience du site pour correspondre au design minimaliste de Tim Baker (https://timbaker.me/), en gardant les couleurs du site original.

---

## 📋 Changements Effectués

### 1️⃣ **Structure HTML - Passage à une Grille 2 Colonnes**

**Fichier modifié :** `src/components/Sections/Resume/index.tsx`

#### **Code AVANT :**
```tsx
import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Section Formation et Expérience */}
      <Section className="bg-gray-100" sectionId={SectionId.Resume} maxWidth="max-w-[1260px]">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          {/* Formations */}
          <ResumeSection title="Formations">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>

          {/* Expériences */}
          <ResumeSection title="Expériences">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
      </Section>

      {/* Section Compétences */}
      <Section className="bg-white" sectionId={SectionId.Skills}>
        <ResumeSection title="Compétences">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
```

#### **Code APRÈS :**
```tsx
import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Section Formation et Expérience */}
      <Section className="bg-gray-100" sectionId={SectionId.Resume} maxWidth="max-w-[1260px]">
        <div className="flex flex-col gap-y-8">
          {/* Grille avec 2 colonnes : Formations et Expérience côte à côte */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Formations */}
            <div>
              <ResumeSection title="Formations">
                {education.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>

            {/* Expérience */}
            <div>
              <ResumeSection title="Expériences">
                {experience.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </ResumeSection>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Compétences séparée */}
      <Section className="bg-white" sectionId={SectionId.Skills}>
        <ResumeSection title="Compétences">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
```

**Explication des changements :**
- **Avant** : `divide-y-2 divide-neutral-300` (empile les sections verticalement)
- **Après** : `grid grid-cols-1 gap-8 md:grid-cols-2` (2 colonnes sur desktop)
- Les formations sont à **gauche**, les expériences à **droite**

---

### 2️⃣ **Composant TimelineItem - Ajout des Bordures et Positionnement Absolu**

**Fichier modifié :** `src/components/Sections/Resume/TimelineItem.tsx`

#### **Code AVANT :**
```tsx
import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
```

#### **Code APRÈS :**
```tsx
import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="relative border-b border-l border-gray-400 py-4 pl-4 last:border-b-0">
      {/* Date et Lieu - Positionnés absolument pour dépasser de la ligne gauche */}
      <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
        <span className="whitespace-nowrap rounded-full border border-orange-400 bg-white px-2 py-1 text-xs font-bold text-orange-700">
          {date}
        </span>
        <span className="text-xs font-medium text-neutral-700">{location}</span>
      </div>

      {/* Titre et Description */}
      <div className="flex flex-col pt-6">
        <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
      </div>
      <div className="text-sm text-neutral-700 prose prose-sm max-w-none">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
```

**Explications détaillées :**

#### **a) Classes de Bordure**
```css
border-b border-l border-gray-400
```
- `border-b` : Ligne horizontale en bas (sépare les items)
- `border-l` : Ligne verticale à gauche (connecte tous les items)
- `border-gray-400` : Couleur gris clair
- `last:border-b-0` : Enlève la bordure bas du dernier item

#### **b) Positionnement Absolu de la Date/Lieu**
```tsx
<div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
```
- `absolute` : Sort du flux normal du document
- `-left-2` : Décale 8px vers la gauche (sur mobile)
- `md:-left-4` : Décale 16px vers la gauche (sur desktop)
- `top-3` : Positionne à 12px du haut
- `flex items-center space-x-2` : Aligne date et lieu horizontalement avec 8px d'espacement

**Résultat visuel :** La boîte date/lieu dépasse de la ligne verticale gauche, créant un effet de "node" sur une timeline.

#### **c) Styling de la Date**
```tsx
<span className="whitespace-nowrap rounded-full border border-orange-400 bg-white px-2 py-1 text-xs font-bold text-orange-700">
  {date}
</span>
```
- `whitespace-nowrap` : Empêche le texte de se casser sur plusieurs lignes
- `rounded-full` : Boîte arrondie (border-radius: 9999px)
- `border border-orange-400` : Bordure orange (couleur du site)
- `bg-white` : Fond blanc
- `px-2 py-1` : Padding (8px horizontal, 4px vertical)
- `text-xs font-bold text-orange-700` : Texte petit, gras, orange foncé

#### **d) Styling du Lieu**
```tsx
<span className="text-xs font-medium text-neutral-700">{location}</span>
```
- Pas de boîte, juste du texte
- `text-xs font-medium` : Petit et semi-gras
- `text-neutral-700` : Couleur gris neutre

#### **e) Padding Top du Titre**
```tsx
<div className="flex flex-col pt-6">
```
- `pt-6` : Padding-top de 24px
- **Important** : Cela crée l'espace vertical pour que la boîte date/lieu (positionnée absolument) n'écrase pas le titre

---

### 3️⃣ **Composant ResumeSection**

**Fichier modifié :** `src/components/Sections/Resume/ResumeSection.tsx`

#### **Code AVANT :**
```tsx
import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
```

#### **Code APRÈS :**
```tsx
import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="flex flex-col gap-y-4 py-8 first:pt-0 last:pb-0">
      <div className="flex justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
```

**Explication :**
- **Avant** : Structure en grille (`grid-cols-4`) pour aligner titre et contenu côte à côte
- **Après** : Structure flex simple en colonne
- Le titre reste avec sa **bordure orange en dessous** (style conservé)
- Les enfants (TimelineItem) s'affichent en dessous du titre
  <div className="flex justify-start">
    <div className="relative h-max">
      <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
      <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
    </div>
  </div>
  <div className="flex flex-col">{children}</div>
</div>
```

**Explication :**
- **Avant** : Structure en grille (`grid-cols-4`) pour aligner titre et contenu côte à côte
- **Après** : Structure flex simple en colonne
- Le titre reste avec sa **bordure orange en dessous** (style conservé)
- Les enfants (TimelineItem) s'affichent en dessous du titre

---

## 🎨 Résultat Final

### **Structure Visuelle :**
```
┌─────────────────────────┬──────────────────────────┐
│      FORMATIONS         │      EXPÉRIENCES         │
│      (Gauche)           │      (Droite)            │
├─────────────────────────┼──────────────────────────┤
│                         │                          │
│  📅 2020-2022           │  📅 2022-Present         │
│  Université             │  Instant Domains         │
│  ─────────────────      │  ─────────────────       │
│  Titre Formation        │  Titre Poste             │
│  Description...         │  Description...          │
│                         │                          │
│  ─────────────────      │  ─────────────────       │
│  📅 2019-2020           │  📅 2020-2022           │
│  IUT                    │  Startup                 │
│  ─────────────────      │  ─────────────────       │
│  Titre Formation        │  Titre Poste             │
│  Description...         │  Description...          │
│                         │                          │
└─────────────────────────┴──────────────────────────┘
```

### **Caractéristiques clés :**
✅ **2 colonnes** (Education | Experience)  
✅ **Bordures** (gauche + bas) pour créer des boîtes visuelles  
✅ **Dates en boîtes arrondies** qui dépassent de la ligne gauche  
✅ **Lieu à côté** sans boîte  
✅ **Titre en gras** avec espacement du haut  
✅ **Description** sous le titre  
✅ **Couleurs conservées** (orange et gris du site original)  
✅ **Responsive** (1 colonne sur mobile, 2 sur desktop)  

---

## 🔧 Classe CSS Clés Utilisées

| Classe | Signification |
|--------|---------------|
| `border-b` | Bordure inférieure |
| `border-l` | Bordure gauche |
| `absolute` | Positionnement absolu (sort du flux) |
| `-left-X` | Décalage à gauche (négatif = vers la gauche) |
| `rounded-full` | Bordure complètement arrondie |
| `whitespace-nowrap` | Texte sur une seule ligne |
| `pt-6` | Padding-top (24px) |
| `px-2 py-1` | Padding horizontal et vertical |
| `grid-cols-1 md:grid-cols-2` | 1 colonne mobile, 2 desktop |
| `last:border-b-0` | Pas de bordure bas du dernier élément |
| `space-x-2` | Espacement horizontal entre éléments (8px) |

---

## 📝 Résumé des Fichiers Modifiés

1. **TimelineItem.tsx** - Ajout bordures + positionnement absolu date/lieu
2. **Resume/index.tsx** - Passage à grille 2 colonnes
3. **ResumeSection.tsx** - Structure flex avec titre et bordure orange

---

## 🚀 Résultat sur le Site

Le site affiche maintenant une section Resume minimaliste et élégante comme celle de Tim Baker, avec :
- Une présentation claire et organisée
- Une meilleure hiérarchie visuelle
- Des boîtes de dates qui "flottent" sur la ligne gauche
- Un design responsive adapté à tous les appareils
- Les couleurs du site conservées (orange et gris)
│  Université             │  Instant Domains         │
│  ─────────────────      │  ─────────────────       │
│  Titre Formation        │  Titre Poste             │
│  Description...         │  Description...          │
│                         │                          │
│  ─────────────────      │  ─────────────────       │
│  📅 2019-2020           │  📅 2020-2022           │
│  IUT                    │  Startup                 │
│  ─────────────────      │  ─────────────────       │
│  Titre Formation        │  Titre Poste             │
│  Description...         │  Description...          │
│                         │                          │
└─────────────────────────┴──────────────────────────┘
```

### **Caractéristiques clés :**
✅ **2 colonnes** (Education | Experience)  
✅ **Bordures** (gauche + bas) pour créer des boîtes visuelles  
✅ **Dates en boîtes arrondies** qui dépassent de la ligne gauche  
✅ **Lieu à côté** sans boîte  
✅ **Titre en gras** avec espacement du haut  
✅ **Description** sous le titre  
✅ **Couleurs conservées** (orange et gris du site original)  
✅ **Responsive** (1 colonne sur mobile, 2 sur desktop)  

---

## 🔧 Classe CSS Clés Utilisées

| Classe | Signification |
|--------|---------------|
| `border-b` | Bordure inférieure |
| `border-l` | Bordure gauche |
| `absolute` | Positionnement absolu (sort du flux) |
| `-left-X` | Décalage à gauche (négatif = vers la gauche) |
| `rounded-full` | Bordure complètement arrondie |
| `whitespace-nowrap` | Texte sur une seule ligne |
| `pt-6` | Padding-top (24px) |
| `px-2 py-1` | Padding horizontal et vertical |
| `grid-cols-1 md:grid-cols-2` | 1 colonne mobile, 2 desktop |
| `last:border-b-0` | Pas de bordure bas du dernier élément |
| `space-x-2` | Espacement horizontal entre éléments (8px) |

---

## 📝 Résumé des Fichiers Modifiés

1. **TimelineItem.tsx** - Ajout bordures + positionnement absolu date/lieu
2. **Resume/index.tsx** - Passage à grille 2 colonnes
3. **ResumeSection.tsx** - Structure flex avec titre et bordure orange

---

## 🚀 Résultat sur le Site

Le site affiche maintenant une section Resume minimaliste et élégante comme celle de Tim Baker, avec :
- Une présentation claire et organisée
- Une meilleure hiérarchie visuelle
- Des boîtes de dates qui "flottent" sur la ligne gauche
- Un design responsive adapté à tous les appareils
- Les couleurs du site conservées (orange et gris)

