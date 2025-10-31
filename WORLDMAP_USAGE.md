# World Map Component - Usage Examples

## Podstawowe użycie

```tsx
import WorldMap from '@/components/WorldMap';

// W tle sekcji z opacity
<div className="absolute inset-0 opacity-30">
  <WorldMap highlightCountries={true} />
</div>
```

## Różne warianty

### 1. W tle z niską opacity (subtelna)
```tsx
<div className="absolute inset-0 opacity-20">
  <WorldMap highlightCountries={true} />
</div>
```

### 2. Bez highlighted countries (tylko mapa)
```tsx
<div className="absolute inset-0 opacity-25">
  <WorldMap highlightCountries={false} />
</div>
```

### 3. Z niestandardowymi klasami
```tsx
<WorldMap
  highlightCountries={true}
  className="opacity-40 blur-sm"
/>
```

### 4. Jako główny element (nie tło)
```tsx
<div className="w-full h-[600px] bg-white rounded-3xl p-8">
  <WorldMap highlightCountries={true} />
</div>
```

## Miejsca gdzie możesz użyć

1. **Hero Section** - jako tło za tekstem
2. **About Section** - pokazuje globalny zasięg
3. **Why Choose Us** - ✅ już dodane
4. **Services Section** - w tle
5. **Contact Page** - jako dekoracja
6. **Footer** - subtelne tło

## Przykład: Dodanie do Hero Section

```tsx
<section className="relative min-h-screen ...">
  {/* Existing backgrounds */}
  <ParticleBackground />

  {/* Add World Map */}
  <div className="absolute inset-0 opacity-10 z-[1]">
    <WorldMap highlightCountries={true} />
  </div>

  {/* Rest of content */}
</section>
```

## Kolory i style

Mapa używa:
- Niebieski gradient dla kontynentów
- UK, Poland, Spain zaznaczone z pulsującymi pinami
- Animated connection lines między krajami
- Grid overlay dla efektu

Możesz dostosować opacity:
- `opacity-10` - bardzo subtelna
- `opacity-20` - lekko widoczna
- `opacity-30` - średnio widoczna (używane obecnie)
- `opacity-40` - mocno widoczna
