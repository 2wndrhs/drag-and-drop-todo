# 구현할 기능 목록

## Todo 입력폼 구현

- [x] Todo 입력 폼이 위치한다.
- [x] 엔터를 입력하거나 버튼을 클릭하면 Todo를 로컬 스토리지에 추가한다.
- [x] 엔터를 입력하거나 버튼을 클릭하면 Todo 입력 폼을 초기화한다.
- [x] 엔터를 입력히거나 버튼을 클릭하면 store에 추가된 Todo를 반영한다.

## Todo 리스트 구현

- [x] Todo 리스트는 Todo 입력 폼 아래 위치한다.
- [x] `localStorage`에 저장되어 있는 `Todos`를 받아온다.
- [x] 받아온 `Todos`를 Todo 리스트에 출력한다.
- [x] `Todo`의 삭제 버튼을 클릭하면 해당 Todo를 로컬 스토리지에서 삭제한다.
- [x] `Todo`의 삭제 버튼을 클릭하면 store에 삭제된 Todo를 반영한다.

## Drag & Drop 구현

- [x] 각 ToDo는 Draggble이 가능하다.
- [x] 각 ToDo는 `dragstart` 이벤트를 감지한다.
- [x] 각 ToDo는 `dragover` 이벤트를 감지한다.
  - [x] 각 `dragstart` 이벤트의 기본 동작을 막는다.
- [x] 각 ToDo는 `dragdrop` 이벤트를 감지한다.
- [x] `dragstart`인 ToDo와 `dragdrop`인 Todo를 이용해 Todo 리스트를 업데이트한다.
- [x] 업데이트한 Todo 리스트를 로컬 저장소에 반영한다.
