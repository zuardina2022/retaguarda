export interface UsuarioTipo {
  idUsuario: number;
  idTurno: number;
  quantidadeLogin: number;
  nomeCompleto: string;
  nomeLogin: string;
  senha: string;
  email: string;
  codigoBarraCracha: string;
  foto: string;
  telefone: string;
  flagBloqueio: boolean;
  flagOperador: boolean;
  flagSolicitarTurnoAoOperador: boolean;
  flagMudaSenhaExpira: boolean;
  flagPedirCodigoAutenticador: boolean;
  flagNaoPodeExcluir: boolean;
  dataTroca: string;
  dataEnvioEmail: string;
  dataValidade: string;
  codigoAutorizacao: string;
  conectado: string;
  idEmpresa: number;
  flagAtivo: boolean;
  dataCadastro: string;
}
