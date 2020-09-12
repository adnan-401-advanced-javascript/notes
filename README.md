# notes

<img src = "./assets/notes-class-03.png" />


## Classes

<dl>
<dt><a href="#Input">Input</a></dt>
<dd></dd>
<dt><a href="#Note">Note</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getAction">getAction()</a> ⇒ <code>string</code></dt>
<dd><p>[input getAction]</p>
</dd>
<dt><a href="#getPayload">getPayload()</a> ⇒ <code>string</code></dt>
<dd><p>[input getPayload]</p>
</dd>
<dt><a href="#isValid">isValid()</a> ⇒ <code>Boolean</code></dt>
<dd><p>[input check the isValid]</p>
</dd>
<dt><a href="#execute">execute(action, payload)</a></dt>
<dd><p>[execute]</p>
</dd>
<dt><a href="#add">add(text, category)</a> ⇒ <code>Promise</code></dt>
<dd><p>[add note]</p>
</dd>
<dt><a href="#delete">delete(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>[delete note]</p>
</dd>
<dt><a href="#list">list(category)</a> ⇒ <code>Promise</code></dt>
<dd><p>[list notes]</p>
</dd>
</dl>

<a name="Input"></a>

## Input
**Kind**: global class  
<a name="Input+action"></a>

### input.action
[action description]

**Kind**: instance property of [<code>Input</code>](#Input)  
**Properties**

| Name | Type |
| --- | --- |
| action | <code>string</code> |
| payload | <code>string</code> |

<a name="Note"></a>

## Note
**Kind**: global class  
<a name="getAction"></a>

## getAction() ⇒ <code>string</code>
[input getAction]

**Kind**: global function  
<a name="getPayload"></a>

## getPayload() ⇒ <code>string</code>
[input getPayload]

**Kind**: global function  
<a name="isValid"></a>

## isValid() ⇒ <code>Boolean</code>
[input check the isValid]

**Kind**: global function  
<a name="execute"></a>

## execute(action, payload)
[execute]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>string</code> | action type add || delete || list |
| payload | <code>string</code> | data |

<a name="add"></a>

## add(text, category) ⇒ <code>Promise</code>
[add note]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | note text |
| category | <code>string</code> | note category |

<a name="delete"></a>

## delete(id) ⇒ <code>Promise</code>
[delete note]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | note id |

<a name="list"></a>

## list(category) ⇒ <code>Promise</code>
[list notes]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| category | <code>string</code> | [note category] |
=======
# notes-mongodb-app

## Input Functions

<dl>
<dt><a href="#constructor">constructor()</a></dt>
<dd><p>[constructor input]</p>
</dd>
<dt><a href="#getAction">getAction()</a> ⇒ <code>string</code></dt>
<dd><p>[getAction description]</p>
</dd>
<dt><a href="#getPayload">getPayload()</a> ⇒ <code>string</code></dt>
<dd><p>[getPayload description]</p>
</dd>
<dt><a href="#isValid">isValid()</a> ⇒ <code>Boolean</code></dt>
<dd><p>[isValid description]</p>
</dd>
</dl>

<a name="constructor"></a>

## constructor()
[constructor input]

**Kind**: global function  
<a name="getAction"></a>

## getAction() ⇒ <code>string</code>
[getAction description]

**Kind**: global function  
**Returns**: <code>string</code> - [description]  
<a name="getPayload"></a>

## getPayload() ⇒ <code>string</code>
[getPayload description]

**Kind**: global function  
**Returns**: <code>string</code> - [description]  
<a name="isValid"></a>

## isValid() ⇒ <code>Boolean</code>
[isValid description]

**Kind**: global function  
**Returns**: <code>Boolean</code> - [description]  


## Note Functions

<dl>
<dt><a href="#create">create(record)</a> ⇒ <code>promise</code></dt>
<dd><p>[create description]</p>
</dd>
<dt><a href="#get">get(_id, category)</a> ⇒ <code>promise</code></dt>
<dd><p>[get description]</p>
</dd>
<dt><a href="#update">update(_id, record)</a> ⇒ <code>promise</code></dt>
<dd><p>[update description]</p>
</dd>
<dt><a href="#delete">delete(_id)</a> ⇒ <code>promise</code></dt>
<dd><p>[delete description]</p>
</dd>
</dl>

<a name="create"></a>

## create(record) ⇒ <code>promise</code>
[create description]

**Kind**: global function  

| Param | Type |
| --- | --- |
| record | <code>object</code> |

<a name="get"></a>

## get(_id, category) ⇒ <code>promise</code>
[get description]

**Kind**: global function  

| Param | Type |
| --- | --- |
| _id | <code>number</code> |
| category | <code>string</code> |

<a name="update"></a>

## update(_id, record) ⇒ <code>promise</code>
[update description]

**Kind**: global function  
**Returns**: <code>promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>number</code> | [description] |
| record | <code>object</code> | [description] |

<a name="delete"></a>

## delete(_id) ⇒ <code>promise</code>
[delete description]

**Kind**: global function  
**Returns**: <code>promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>number</code> | [description] |