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
