<template>
  <form @submit.prevent="create()">
      <div class="student-page">
          <div class="card">
          <div class="card-header">Cadatrar Estudante</div>
            <div class="card-body">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Nome"
                  required>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="E-mail"
                  required>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      name="cpf"
                      class="form-control"
                      placeholder="CPF"
                      required>
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      name="ra"
                      class="form-control"
                      placeholder="Registro Acadêmico"
                      required>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg">Cadastrar Estudante</button>
            </div>
          </div>
      </div>
  </form>
</template>
