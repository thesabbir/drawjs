---
id: "draw"
title: "Class: Draw"
sidebar_label: "Draw"
sidebar_position: 0
custom_edit_url: null
---

# Class: Draw

Usage Example

```typescript
import { Draw } from '@thesabbir/drawjs';

const rootElement = document.queryeSlector('root');
const draw = new Draw(rootElement);

```

## Constructors

### constructor

\+ **new Draw**(`rootElm`: HTMLDivElement): [*Draw*](draw.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootElm` | HTMLDivElement |

**Returns:** [*Draw*](draw.md)

## Accessors

### activeFile

• get **activeFile**(): [*DrawFile*](drawfile.md)

**Returns:** [*DrawFile*](drawfile.md)

• set **activeFile**(`file`: [*DrawFile*](drawfile.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [*DrawFile*](drawfile.md) |

**Returns:** *void*

___

### files

• get **files**(): [*DrawFile*](drawfile.md)[]

**Returns:** [*DrawFile*](drawfile.md)[]

## Methods

### draw

▸ **draw**(`shape`: *Shape*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | *Shape* |

**Returns:** *void*

___

### newFile

▸ **newFile**(`name`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*
