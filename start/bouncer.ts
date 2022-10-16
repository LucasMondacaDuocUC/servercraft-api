import Bouncer from '@ioc:Adonis/Addons/Bouncer'

// Actions
export const { actions } = Bouncer

// Policies
export const { policies } = Bouncer.registerPolicies({
  RolesPolicy: () => import('App/Policies/RolesPolicy'),
  ServidoresPolicy: () => import('App/Policies/ServidoresPolicy'),
  InstanciasPolicy: () => import('App/Policies/InstanciasPolicy'),
  SistemaPolicy: () => import('App/Policies/SistemaPolicy'),
  IncidentesPolicy: () => import('App/Policies/IncidentesPolicy'),
  UsuarioPolicy: () => import('App/Policies/UsuarioPolicy'),
})
