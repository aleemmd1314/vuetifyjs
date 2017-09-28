<template>
  <v-app>
		<v-toolbar dark class="primary">
			<v-toolbar-title class="white--text">Welcome</v-toolbar-title>
				</v-toolbar-title>
		</v-toolbar>
		<main>
			<v-container fluid >
				<v-layout row wrap dark>
					<v-flex xs12 md6 offset-md3>
						<v-card primary>
							<v-alert info dismissible v-model="submit">
								This is a success alert that is closable.
							</v-alert>
							<v-card-text>
								<v-container fluid>
									<v-layout row>
										<v-flex xs12>
											<v-text-field v-model="name" name="name" label="Name" id="name"></v-text-field>
										</v-flex>
									</v-layout>
									<v-layout row>
										<v-flex xs12>
											<v-text-field v-model="email" name="email" label="Email" id="email"></v-text-field>
										</v-flex>
									</v-layout>
                  <v-layout row>
										<v-flex xs12>
											<v-text-field v-model="password" type="password" name="password" label="Password" id="password"></v-text-field>
										</v-flex>
									</v-layout>
                  <v-layout row>
										<v-flex xs12>
											<v-text-field v-model="confirmPassword" type="password" name="cpassword" label="Confirm password" id="cpassword"></v-text-field>
										</v-flex>
									</v-layout>
									<div class="text-xs-center">
										<v-btn primary dark v-on:click="signup()">SIGNUP</v-btn>
										<v-btn danger dark v-on:click.native="submit = false">Clear</v-btn>
									</div>
								</v-container>
							</v-card-text>
						</v-card>

					</v-flex>
				</v-layout>
			</v-container>
		</main>
	</v-app>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      submit: false
    }
  },
  methods: {
    signup () {
      this.submit = true
    }
  }
}
</script>
