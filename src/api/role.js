/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'
import { baseUrl, khglUrl, dicUrl } from '@/config/env'

export function roleList() {
  return request({
    url: baseUrl + '/admin/role/roleList',
    method: 'get'
  })
}

export function fetchList(query) {
  return request({
    url: baseUrl + '/admin/role/rolePage',
    method: 'get',
    params: query
  })
}

export function deptRoleList(deptId) {
  return request({
    url: baseUrl + '/admin/role/roleList/' + deptId,
    method: 'get'
  })
}

export function getObj(id) {
  return request({
    url: baseUrl + '/admin/role/' + id,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: baseUrl + '/admin/role/',
    method: 'post',
    data: obj
  })
}

export function putObj(obj) {
  return request({
    url: baseUrl + '/admin/role/',
    method: 'put',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: baseUrl + '/admin/role/' + id,
    method: 'delete'
  })
}

export function permissionUpd(roleId, menuIds) {
  return request({
    url: baseUrl + '/admin/role/roleMenuUpd',
    method: 'put',
    params: {
      roleId: roleId,
      menuIds: menuIds
    }
  })
}

export function fetchRoleTree(roleName) {
  return request({
    url: baseUrl + '/admin/menu/roleTree/' + roleName,
    method: 'get'
  })
}

export function fetchDeptTree(query) {
  return request({
    url: baseUrl + '/admin/dept/tree',
    method: 'get',
    params: query
  })
}
