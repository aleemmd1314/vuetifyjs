<template>
<div>
	<v-navigation-drawer class = "hidden-md-and-up" absolute persistent light overflow v-model="drawer">
    <v-toolbar flat>
        <v-list>
          <v-list-tile>Welcome</v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0" ripple>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list dense class="pt-0" ripple>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>book-multiple-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
	</v-navigation-drawer>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon class = "hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
	<main>
		<v-container fluid fill-height>
		<v-layout>
    <v-flex xs12 md6>
            <v-card class="blue-grey darken-2 white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

  </v-layout>
	</v-container>
		</main>
	</div>

</template>
<script>
export default {
  data () {
    return {
      drawer: true
    }
  }
}
</script>
