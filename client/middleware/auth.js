export default function ({ store, redirect }) {
  if (!store.state.auth.user) {
    redirect('/admin/sign-in');
  }
}
