export default {
    buildModules: [
        'nuxt-gsap-module',
    ],
    gsap: {
        extraPlugins: {
            scrollTrigger: true,
        },
    },
    plugins: [
        '@/plugins/mirage.js',
    ],
    axios: {},
}
