<template>
    <form>
      <div class="login-page">
          <div class="card">
          <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="E-mail"
                  required>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  v-model="form.password"
                  class="form-control"
                  placeholder="Senha"
                  required>
              </div>
              <button class="btn btn-primary w-100">Entrar</button>
            </div>
          </div>
      </div>
    </form>
</template>

<script>

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      error: null,
      success: false,
    },
  }),
  methods: {

  },
};
</script>

<style scoped>
  .login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 30%;
  }
</style>
