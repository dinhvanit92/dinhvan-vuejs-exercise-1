<template>
  <div class="event">
      <ul class="event-list">
          <li>
              <div class="event-click">
                  <div class="check">
                      <input class="inb" type="checkbox">
                      <p>1 Phút trước</p>
                  </div>
                  
                  <div class="modified">
                      <a href=""><img src="../assets/edit.png" alt=""></a>
                      <a href=""><img src="../assets/delete.png" alt=""></a>
                  </div>
              </div>
              <p>Công việc 1</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'EventLists'

}
</script>

<style>

.event-list{
    width: 80%;
    margin: auto;
    border: 1px solid rgba(51, 51, 51, 0.131);
    padding: 10px;
    background-color: white;
}
.event-list li{
    list-style: none;
}
.event-list p{
    padding: 10px 20px;
}
.modified img{
    width: 15px;
    padding: 5px;
}
.event-click {
    display: flex;
    justify-content:space-between;
    margin: 5px;
}
.check p{ 
    font-size: 12px;
    margin-top: -10px;
}
.inb{
    float: left;
}
</style>