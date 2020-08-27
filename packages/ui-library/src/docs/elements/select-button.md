# Select Button

Select an option from a set. This is just another kind of radio inputs.
Typically they are used for Yes or No questions

## Usage

```html
<div class="bal-select-buttons">
    <div class="bal-select-button">
        <input type="radio" id="gender-male" name="gender-1" value="male" checked="checked"/>
        <label for="gender-male">Mr</label>
    </div> 
    <div class="bal-select-button">
        <input type="radio" id="gender-female" name="gender-1" value="female"/>
        <label for="gender-female">Miss</label>
    </div>
</div>
```

## Disabled

```html
<div class="bal-select-buttons">
    <div class="bal-select-button">
        <input type="radio" id="gender-male" name="gender-2" value="male" checked="checked" disabled="disabled"/>
        <label for="gender-male">Mr</label>
    </div> 
    <div class="bal-select-button">
        <input type="radio" id="gender-female" name="gender-2" value="female" disabled="disabled"/>
        <label for="gender-female">Miss</label>
    </div>
</div>
```
