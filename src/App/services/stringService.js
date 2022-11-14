export const isStringHtml = source => source.includes('<') || source.includes('/>');

export const obscureString = source => source.split('').map(() => '👾').join('');
