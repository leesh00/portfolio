<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="far fa-plus-square addBtn"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <div slot="body">
                무언가를 입력하세요.
            </div>
            <button slot="footer">
                확인
            </button>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data() {
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods:{
        addTodo() {
            if(this.newTodoItem !== ''){
                // this.$emit('addTodoItem',this.newTodoItem);
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem',text);
                this.clearInput();
            }else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background-color: #fff;
    height:50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    padding:0 1rem;
    float:left;
    display: block;
    width:calc(100% - 50px);
    height: 100%;
    border-style: none;
    font-size:0.9rem;
    box-sizing: border-box;
}
.addContainer{
    cursor: pointer;
    float:right;
    background:linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 50px;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:#fff;
    vertical-align: middle;
}
.closeModalBtn{
    color:#42b583;
}
</style>