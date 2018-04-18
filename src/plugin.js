const plugin = {
    install(Vue, options){
        Vue.mixin({
            data() {
                return {
                    done: [],
                    undone: [],
                    newMutation: true
                }
            },
            created(){
                this.$store.subscribe(mutation => {
                    if (mutation.type != 'emptyState'){
                        this.done.push(mutation);
                    }

                    if (this.newMutation){
                        this.undone = [];
                    }
                });
            },
            computed: {
                canRedo(){
                    return this.undone.length;
                },
                canUndo(){
                    return this.done.length;
                }
            },
            methods: {
                redo(){
                    let commit = this.undone.pop();
                    this.newMutation = false;
                    this.$store.commit(commit.type, commit.payload);
                    this.newMutation = true;
                },
                undo(){
                    this.undone.push(this.done.pop());
                    this.newMutation = false;
                    this.$store.commit('emptyState');

                    this.done.forEach(data => {
                        this.$store.commit(data.type, data.payload);
                        this.done.pop();
                    });

                    this.newMutation = true;
                }
            }
        });
    }
}

export default plugin;