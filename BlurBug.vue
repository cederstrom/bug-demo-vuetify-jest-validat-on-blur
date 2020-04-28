<template>
  <div>
    <v-text-field id="alpha" :rules="rules"></v-text-field>
    <v-text-field id="beta" :rules="rules" validate-on-blur></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      rules: [v => /\d/.test(v) || "That's not a digit!"]
    };
  }
};
</script>
