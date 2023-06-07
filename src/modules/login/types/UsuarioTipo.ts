export interface UsuarioTipo {
  idUsuario: number;
  idEmpresa: number;
  NomeCompleto: string;
  NomeLogin: string;
  Senha: string;
  Email: string;
  QuantidadeLogin: number;
  FlagBloqueio: boolean;
  FlagMudaSenhaExpira: boolean;
  DataValidade: string;
}
