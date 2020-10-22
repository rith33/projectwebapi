<?php 
use Slim\Http\Request; //namespace 
use Slim\Http\Response; //namespace 

//read table applicationlist
$app->get('/applicationlist', function (Request $request, Response $response, array $arg){ 
    return $this->response->withJson(array('data' => 'success'), 200); 
});

//request table applicationlist by condition 
$app->get('/applicationlist/[{id}]', function ($request, $response, $args){ 
    $AppID = $args['id']; 
    if (!is_numeric($AppID)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); 
    } 
    $data = getProduct($this->db,$AppID); 
    if (empty($data)) { 
        return $this->response->withJson(array('error' => 'no data'), 404); 
    } 
    return $this->response->withJson(array('data' => $data), 200); 
});

//read table candidate
$app->get('/candidate', function (Request $request, Response $response, array $arg){ 
    return $this->response->withJson(array('data' => 'success'), 200); 
});

//request table candidate by condition 
$app->get('/candidate/[{id}]', function ($request, $response, $args){ 
    $CanID = $args['id']; 
    if (!is_numeric($CanID)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); 
    } 
    $data = getProduct($this->db,$CanID); 
    if (empty($data)) { 
        return $this->response->withJson(array('error' => 'no data'), 404); 
    } 
    return $this->response->withJson(array('data' => $data), 200); 
});

//read table employer
$app->get('/employer', function (Request $request, Response $response, array $arg){ 
    return $this->response->withJson(array('data' => 'success'), 200); 
});

//request table employer by condition 
$app->get('/employer/[{id}]', function ($request, $response, $args){ 
    $EmpID = $args['id']; 
    if (!is_numeric($EmpID)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); 
    } 
    $data = getProduct($this->db,$EmpID); 
    if (empty($data)) { 
        return $this->response->withJson(array('error' => 'no data'), 404); 
    } 
    return $this->response->withJson(array('data' => $data), 200); 
});

//read table joblist
$app->get('/joblist', function (Request $request, Response $response, array $arg){ 
    return $this->response->withJson(array('data' => 'success'), 200); 
});

//request table joblist by condition 
$app->get('/joblist/[{id}]', function ($request, $response, $args){ 
    $JobID = $args['id']; 
    if (!is_numeric($JobID)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); 
    } 
    $data = getProduct($this->db,$JobID); 
    if (empty($data)) { 
        return $this->response->withJson(array('error' => 'no data'), 404); 
    } 
    return $this->response->withJson(array('data' => $data), 200); 
});

