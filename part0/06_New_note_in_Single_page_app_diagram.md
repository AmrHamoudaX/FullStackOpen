```mermaid

sequenceDiagram
participant browser
participant server

browser->> server: POST /new_note_spa
activate server
server-->> browser: Payload contains the created resources
deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

```
