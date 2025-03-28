import {defineConfig} from 'tsup'

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/e-recruiting.ts',
        'src/auth.ts',
    ],
    dts: true,
    format: ['esm', "cjs"],
    treeshake: true,
    splitting: true,
    clean: true,
});
