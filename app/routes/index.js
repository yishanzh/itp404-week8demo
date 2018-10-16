import Route from '@ember/routing/route';

export default Route.extend({
  // model hook to load data
  model(){
    // $.getJSON('/api/posts');
    return this.store.findAll('post');

  }
});
