# RQST Design System

> **Personal Study Project**: This design system was developed as a personal study project to explore and understand the concepts of building scalable component libraries using Vue 3 and Quasar Framework. While functional, it serves as a learning resource and demonstration of component library architecture, design system principles, and modern frontend development practices.

A lightweight, customizable Vue 3 component library built on top of Quasar Framework.

## Installation

```bash
# Using npm
npm install github:tdrcavallini/rqst-ds-pkg#main

# Using yarn
yarn add github:tdrcavallini/rqst-ds-pkg#main

# Using specific version
yarn add github:tdrcavallinirqst-ds-pkg#v1.0.0
```

## Usage

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import RQSTDesignSystem from '@rqst/design-system'
import '@rqst/design-system/dist/style.css'

const app = createApp(App)
app.use(RQSTDesignSystem)
app.mount('#app')
```

## Components

### Button
```vue
<template>
  <MyButton 
    label="Click me" 
    variant="solid" 
    color="primary"
    size="medium"
    @click="handleClick"
  />
</template>
```

**Props:**
- `label`: string
- `variant`: 'solid' | 'outlined' | 'text'
- `color`: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `startIcon`: string
- `endIcon`: string

### Input
```vue
<template>
  <MyInputText
    v-model="text"
    label="Enter text"
    variant="outlined"
    :error="hasError"
    :error-message="errorMessage"
  />
</template>
```

### Select
```vue
<template>
  <MySelect
    v-model="selected"
    :options="options"
    label="Choose an option"
    variant="outlined"
  />
</template>
```

### Badge
```vue
<template>
  <MyBadge
    label="New"
    color="error"
    variant="solid"
  />
</template>
```

### Banner
```vue
<template>
  <MyBanner
    message="Important information"
    variant="info"
    :rounded="true"
  />
</template>
```

### Skeleton
```vue
<template>
  <MySkeleton
    :lines="3"
    speed="normal"
  />
</template>
```

## Development

```bash
# Install dependencies
yarn install

# Run Storybook development server
yarn storybook

# Run tests
yarn test

# Build library
yarn build
```

## Design Principles

1. **Framework Agnostic**: Components expose a clean API that doesn't leak implementation details
2. **Maintainable**: Organized for easy maintenance and updates
3. **Flexible**: Easy to swap underlying UI framework
4. **Type Safe**: Full TypeScript support
5. **Documented**: Comprehensive Storybook documentation

## Contributing

This is a personal study project, but suggestions and feedback are welcome! Feel free to open issues for discussion.

## Built With

- [Vue 3](https://v3.vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was created as a learning exercise to understand design systems
- Inspired by various open-source component libraries and design systems
